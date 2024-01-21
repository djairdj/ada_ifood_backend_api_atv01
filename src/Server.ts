import express, { Request, Response } from "express";

import { v4 as uuidV4 } from 'uuid';

import fs from 'fs';

const path = './src/base/db.json';

function readJsonFile(file_path: string) {
  try {
    const conteudoArquivo = fs.readFileSync(file_path, 'utf8');
    const objetoJSON = JSON.parse(conteudoArquivo);
    return objetoJSON;
  } catch (erro: any) {
    throw new Error(`Erro ao ler o arquivo JSON: ${erro.message}`);
  }
}
function writeJsonFile(jsonObject: JSON | never[], file_path: string): void {
  const objetoSerializado = JSON.stringify(jsonObject, null, 2);
  fs.writeFileSync(file_path, objetoSerializado);
}

export const server = async (port: number = 3003) => {
  const app = express();
  app.use(express.json());
  app.listen(port, () => { console.log("Servidor ouvindo na porta " + port); });

  // Obter todos os médicos
  app.get('/',
    async (_, resp: Response) => {
      const doctorsList = await getAllDoctorsInJSON();
      return resp.status(200).json(doctorsList);
    });
  // Obter 1 médico pelo cpf
  app.get('/cpf/:cpf?',
    async (req, resp: Response) => {
      if (!req.params.cpf)
        return resp.status(404).json([]);
      const doctor = await getDoctorByCpfInJSON(req.params.cpf);
      if (doctor)
        resp.status(200).json(doctor);
      else
        resp.status(404).end();
    });
  // Obter 1 médico pelo crm
  app.get('/crm/:crm?',
    async (req, resp: Response) => {
      if (!req.params.crm) return resp.status(404).json([]);
      const doctor = await getDoctorByCrmInJSON(req.params.crm);
      if (doctor) resp.status(200).json(doctor);
      else resp.status(404).end();
    });
  // Obter um médico pelo nome
  app.get('/name/:name?',
    async (req, resp: Response) => {
      if (!req.params.name) return resp.status(404).end();
      const doctor = await getDoctorsByNameInJSON(req.params.name);
      if (doctor) resp.status(200).json(doctor);
      else resp.status(404).end();
    });
  // Obter um médico pelo id
  app.get('/id/:id?',
    async (request: Request, resp: Response) => {
      if (!request.params.id) return resp.status(404).json([]);
      const doctor = await getDoctorByIdInJSON(request.params.id);
      if (doctor) resp.status(200).json(doctor);
      else resp.status(404).end();
    });
  // Adicionar 1 médico
  app.post('/',
    async (request, response: Response) => {
      request.body['id'] = uuidV4();
      const doctor = await addDoctorInJSON(request.body);
      if (doctor) response.status(201).json(doctor);
      else response.status(403).json({});
    });
  // Atualizar 1 médico
  app.put('/',
    async (request, response: Response) => {
      const doctor = await updateDoctorByIdInJSON(request.body);
      if (doctor) response.status(201).json(doctor);
      else response.status(403).json({});
    });
  // Deletar 1 médico
  app.delete('/:id?',
    async (request, response) => {
      if (!request.params.id) return response.status(404).json([]);
      const doctor = await deleteDoctorByIdInJSON(request.params.id);
      if (doctor) response.status(200).json(doctor);
      else response.status(404).end();
    });
}

async function addDoctorInJSON(doctor: any) {
  try {
    let result: any = readJsonFile(path);
    let exist = result.some((i: any) => (
      i.cpf == doctor.cpf || i.crm == doctor.crm));
    if (exist) throw new Error("Já existe um doctor com esse CPF/CRM");
    result.push(doctor);
    writeJsonFile(result, path);
    return result;
  } catch (error: any) {
    console.error(error.message);
  }
}
async function getDoctorByCpfInJSON(cpf: string) {
  let result = readJsonFile(path);
  result = result.filter((i: any) => i.cpf == cpf);
  if (result.length == 0) return undefined;
  return result[0];
}
async function getDoctorByCrmInJSON(crm: string) {
  let result = readJsonFile(path);
  result = result.filter((i: any) => i.crm == crm);
  if (result.length == 0) return undefined;
  return result[0];
}
async function getDoctorByIdInJSON(id: string) {
  let result = readJsonFile(path);
  result = result.filter((i: any) => i.id == id);
  if (result.length == 0) return undefined;
  return result[0];
}
async function getDoctorsByNameInJSON(name: string) {
  let result = readJsonFile(path);
  result = result.filter((i: any) => {
    let nome = i.name.toLowerCase();
    return nome.indexOf(name.toLowerCase()) > -1;
  });
  return result;
}
async function getAllDoctorsInJSON() {
  try {
    let result = readJsonFile(path);
    return result;
  } catch (error: any) {
    console.error("ERRO: " + error.message);
  }
}
async function updateDoctorByIdInJSON(body: any) {
  let id = body.id, result: any = undefined;
  if (id) {
    try {
      result = readJsonFile(path);
      let index = result.indexOf(result.find((a: any) => a.id == id));
      if (index > -1) {
        result[index] = body;
        writeJsonFile(result, path);
        return body;
      }
      return result;
    } catch (error: any) {
      console.error(error.message);
    }
  } else console.log("Não foi possível atualizar o médico sem o id.");
  return result;
}
async function deleteDoctorByIdInJSON(id: string) {
  let result: any = undefined;
  if (id) {
    try {
      result = readJsonFile(path);
      let index = result.indexOf(result.find((a: any) => a.id == id));
      if (index > -1) {
        let doc = result.splice(index, 1)
        writeJsonFile(result, path)
        return doc;
      }
      return result;
    } catch (error: any) {
      console.error(error.message);
    }
  } else console.log("Não foi possível atualizar o médico sem o id.");
  return result;
}
