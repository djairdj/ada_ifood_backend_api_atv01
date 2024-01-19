import express, { Request, Response } from "express";

import { connection } from "./base/Connection";

import { v4 as uuidV4 } from 'uuid'

export const server = async (port: number = 3003) => {
  const app = express();
  app.use(express.json());
  app.listen(port, () => { console.log("Servidor ouvindo na porta " + port); });

  // Obter todos os médicos
  app.get('/', async (_, resp: Response) => {
    const doctorsList = await getAllDoctors();
    return resp.status(200).json(doctorsList);
  });
  // Obter um médico pelo cpf
  app.get('/cpf/:cpf?', async (req, resp: Response) => {
    if (!req.params.cpf)
      return resp.status(404).json([]);
    const doctor = await getDoctorByCPF(req.params.cpf);
    if (doctor)
      resp.status(200).json(doctor);
    else
      resp.status(404).end();
  });
  // Obter um médico pelo crm
  app.get('/crm/:crm?', async (req, resp: Response) => {
    if (!req.params.crm) return resp.status(404).json([]);
    const doctor = await getDoctorByCRM(req.params.crm);
    if (doctor) resp.status(200).json(doctor);
    else resp.status(404).end();
  });
  // Obter um médico pelo nome
  app.get('/name/:name?', async (req, resp: Response) => {
    if (!req.params.name) return resp.status(200).json(await getAllDoctors());
    const doctor = await getDoctorsByName(req.params.name);
    if (doctor) resp.status(200).json(doctor);
    else resp.status(404).end();
  });
  // Obter um médico pelo id
  app.get('/id/:id?', async (request: Request, resp: Response) => {
    if (!request.params.id) return resp.status(404).json([]);
    const doctor = await getDoctorById(request.params.id);
    if (doctor) resp.status(200).json(doctor);
    else resp.status(404).end();
  });
  // Post 1 médico
  app.post('/', async (request, response: Response) => {
    request.body['id'] = uuidV4();
    const doctor = await addDoctor(request.body);
    if (doctor) response.status(201).json(doctor);
    else response.status(403).json({});
  });
  // Atualizar um médico
  app.put('/', async (request, response: Response) => {
    const doctor = await updateDoctorById(request.body);
    if (doctor) response.status(201).json(doctor);
    else response.status(403).json({});
  });
  // Deletar um médico
  app.delete('/:id?', async (request, response) => {
    if (!request.params.id) return response.status(404).json([]);
    const doctor = await deleteDoctorById(request.params.id);
    if (doctor) response.status(200).json(doctor);
    else response.status(404).end();
  });
}

async function addDoctor(doctor: any) { // Ok
  let query: any, x: any;
  try {
    [query] = await connection.execute(
      `INSERT INTO tb_doctor values(
          '${doctor.id}', '${doctor.name}', '${doctor.cpf}', '${doctor.crm}',
          '${doctor.title}', '${doctor.description}');`
    );
    x = await getDoctorByCPF(doctor.cpf);
    return x;
  } catch (error: any) {
    console.log(error.message);
  }
}

async function getDoctorByCPF(cpf: string) {
  try {
    let [doctor]: any = await connection.execute(
      `SELECT * FROM tb_doctor WHERE cpf = '${cpf}';`
    );
    return doctor[0];
  } catch (error: any) {
    console.log("ERRO: " + error.message);
  }
}

async function getDoctorByCRM(crm: string) {
  try {
    let [doctor]: any = await connection.execute(
      `SELECT * FROM tb_doctor WHERE crm = '${crm}';`
    );
    return doctor[0];
  } catch (error: any) {
    console.log("ERRO: " + error.message);
  }
}

async function getDoctorById(id: string) {
  try {
    let [doctor]: any = await connection.execute(
      `SELECT * FROM tb_doctor WHERE id = '${id}';`
    );
    return doctor[0];
  } catch (error: any) {
    console.log("ERRO: " + error.message);
  }
}

async function getDoctorsByName(name: string) {
  try {
    const [doctorList] = await connection.execute(
      `SELECT * FROM tb_doctor WHERE name like CONCAT('%', '${name}', '%') order by name;`
    );
    return doctorList;
  } catch (error: any) {
    console.log("ERRO: " + error.message);
  }
}

async function getAllDoctors() {
  try {
    const [doctorList] = await connection.execute(
      `SELECT * FROM tb_doctor order by name;`
    );
    return doctorList;
  } catch (error: any) {
    console.log("ERRO: " + error.message);
  }
}

async function updateDoctorById(body: any) {
  let id = body.id, result: any;
  if (id) {
    try {
      [result] = await connection.execute(
        `UPDATE tb_doctor SET
        name = '${body.name}',
        cpf = '${body.cpf}',
        crm = '${body.crm}',
        title = '${body.title}',
        description = '${body.description}'
        WHERE id = '${id}'
        ;`
      );
      if (result['affectedRows'] > 0)
        result = await getDoctorById(id);
    } catch (error: any) {
      console.log(error.message);
    }
  } else console.log("Não foi possível atualizar o médico sem o id.");
  return result;
}

async function deleteDoctorById(id: string) {
  try {
    const [doctor, result]: any = [
      await getDoctorById(id),
      await connection.execute(`DELETE FROM tb_doctor WHERE id = '${id}';`)
    ];
    if (doctor && result[0].affectedRows > 0)
      return doctor;
  } catch (error: any) {
    console.log("ERRO: " + error.message);
  }
}