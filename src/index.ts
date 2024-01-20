import { server } from "./Server";
import * as readline from 'readline'
import { exit } from "process";

const axios = require('axios');

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let port: number, url: string;
port = 443;
url = 'https://17b8d315-2f47-4429-aec4-caa081cfc417-00-1gcz5e768otcp.kirk.replit.dev';

port = 80;
url = 'http://localhost';

function input_keyboard(msg: string = ""): Promise<string> {
  const promisse = new Promise<string>((resolve) => {
    readLine.question(msg, (resposta) => {
      resolve(resposta);
    });
  });
  return promisse;
}

async function fillDataBase(): Promise<void> {
  const listagem = [
    {
      "name": "Ailézig",
      "cpf": "32165412159",
      "crm": "1234",
      "title": "Cardiologista",
      "description": "Especialidade médica que se dedica ao diagnóstico e tratamento de doenças do coração e do sistema cardiovascular.",
      "id": "6daa6058-8186-422f-b944-ebc34afa95f8"
    },
    {
      "name": "Bruno",
      "cpf": "32165412119",
      "crm": "1235",
      "title": "Dermatologista",
      "description": "Área médica que trata das doenças relacionadas à pele, cabelo e unhas, além de problemas dermatológicos.",
      "id": "ac6aa1cf-99e0-46b5-a61d-9062c0a545b5"
    },
    {
      "name": "Christiane",
      "cpf": "14789632145",
      "crm": "1236",
      "title": "Endocrinologista",
      "description": "Especialidade que se concentra nos distúrbios hormonais e no sistema endócrino, como diabetes e distúrbios da tireoide.",
      "id": "a39617f9-4e5f-4b05-8c9e-2f617e685334"
    },
    {
      "name": "Djair",
      "cpf": "67183492500",
      "crm": "598102",
      "title": "Mastologista",
      "description": "Especializado na saúde das mamas. Tanto em mulheres quanto em homens.",
      "id": "6b243d73-4dd5-419c-bd15-2625c58ceaf8"
    },
    {
      "name": "Edson",
      "cpf": "35795146500",
      "crm": "654987",
      "title": "Biomédico",
      "description": "Responsável por usar quantidades pequenas de radioisótopos, ou também chamado de radiofármacos, com o objetivo de examinar melhor a função de órgãos que estão em foco num diagnóstico.",
      "id": "6ade0cc4-6a16-4c40-816a-ef464cd49f8a"
    },
    {
      "name": "Fábio",
      "cpf": "10450260399",
      "crm": "985540",
      "title": "Neurocirurgião",
      "description": "Realiza cirurgias no sistema nervoso, incluindo cérebro, medula espinhal e nervos periféricos, para tratar condições neurológicas.",
      "id": "b448ec11-2695-470a-90ca-301b13ef8019"
    },
    {
      "name": "Gabriel",
      "cpf": "01312332100",
      "crm": "444111",
      "title": "Hematologia",
      "description": "Trata de doenças do sangue, incluindo anemias, distúrbios de coagulação e cânceres sanguíneos.",
      "id": "2c78f5d2-c32c-406d-a9b9-34a20ec73e3b"
    },
    {
      "name": "Gabriela",
      "cpf": "85874796900",
      "crm": "951032",
      "title": "Ginecologista",
      "description": "Especialidade voltada para a saúde da mulher, tratando questões relacionadas ao sistema reprodutivo feminino.",
      "id": "e8382c10-1861-46c9-b207-2705d4d45705"
    },
    {
      "name": "Igor",
      "cpf": "95432105231",
      "crm": "410413",
      "title": "Geriatra",
      "description": "Foca no cuidado de idosos, abordando questões de envelhecimento, saúde mental e doenças associadas à idade.",
      "id": "3f839676-dd96-4d86-99f9-bc1b35e12340"
    },
    {
      "name": "Ivison",
      "cpf": "32101230255",
      "crm": "587413",
      "title": "Gastroenterologista",
      "description": "Trata de doenças do trato digestivo, incluindo estômago, intestinos, fígado e pâncreas.",
      "id": "d05546ff-9cf1-47bf-9145-c3a1f03e13f0"
    },
    {
      "name": "Jamiely",
      "cpf": "74101474100",
      "crm": "741014",
      "title": "Nefrologista",
      "description": "Trata de doenças renais, incluindo insuficiência renal, hipertensão renal e distúrbios do equilíbrio hídrico.",
      "id": "5761330e-84fb-4da0-b76b-562c3319ae35"
    },
    {
      "name": "Jessany",
      "cpf": "98569856544",
      "crm": "989898",
      "title": "Pneumologista",
      "description": "Especialidade que se dedica às doenças respiratórias, como asma, doença pulmonar obstrutiva crônica (DPOC) e pneumonia.",
      "id": "9effb503-eb1c-4144-ab5b-5a0a34935e24"
    },
    {
      "name": "João Marcos",
      "cpf": "59685695633",
      "crm": "520631",
      "title": "Neurologista",
      "description": "Lida com o diagnóstico e tratamento de distúrbios neurológicos, como epilepsia, enxaqueca e acidente vascular cerebral.",
      "id": "e1eaa92f-22c4-4bba-bfb8-9cde85ac0a0d"
    },
    {
      "name": "João Proti",
      "cpf": "74101478966",
      "crm": "635416",
      "title": "Obstetra",
      "description": "Foca na saúde da mulher durante a gravidez, parto e pós-parto, bem como no cuidado do feto.",
      "id": "45843145-9ee5-470f-8be7-190b3e3d40ea"
    },
    {
      "name": "Luis",
      "cpf": "32101310200",
      "crm": "741147",
      "title": "Oncologista",
      "description": "Trata de cânceres, incluindo diagnóstico, tratamento e acompanhamento de pacientes com câncer.",
      "id": "ef0405b7-dc43-4b1b-8b1e-3432b879fdad"
    },
    {
      "name": "Marília",
      "cpf": "85296385200",
      "crm": "564645",
      "title": "Oftalmologista",
      "description": "Especialidade que cuida da saúde ocular, tratando condições como miopia, catarata e glaucoma.",
      "id": "ab992ffe-120e-4ec0-9a6e-af059d22a9b1"
    },
    {
      "name": "Matheus",
      "cpf": "45632147899",
      "crm": "521453",
      "title": "Ortopedista",
      "description": "Lida com problemas do sistema musculoesquelético, incluindo ossos, articulações, músculos e tendões.",
      "id": "9d74f845-869d-44d1-bbc3-69c2da1108e1"
    },
    {
      "name": "Murilo",
      "cpf": "12301232144",
      "crm": "520520",
      "title": "Otorrinolaringologista",
      "description": "Trata de distúrbios do ouvido, nariz, garganta, cabeça e pescoço, incluindo audição e equilíbrio.",
      "id": "5e5e716a-aa57-48d5-bc17-97889760b6ac"
    },
    {
      "name": "Patrick Lima",
      "cpf": "96396395100",
      "crm": "123132",
      "title": "Pediatra",
      "description": "Especializado na saúde de crianças, abordando questões pediátricas, desenvolvimento infantil e prevenção de doenças.",
      "id": "b8fdab01-7670-4066-b013-0da1cc971d49"
    },
    {
      "name": "Patrick Vilhena",
      "cpf": "96385296312",
      "crm": "963962",
      "title": "Psiquiatra",
      "description": "Lida com transtornos mentais, distúrbios emocionais e problemas psicológicos, proporcionando tratamento e terapia.",
      "id": "6f4aaaee-8c84-4836-b2ff-d1d4978801a8"
    },
    {
      "name": "Paulo",
      "cpf": "32132165411",
      "crm": "369369",
      "title": "Radiologista",
      "description": "Especialidade que utiliza técnicas de imagem, como raios-X e ressonância magnética, para diagnosticar e tratar condições médicas.",
      "id": "76371dff-9efb-4c0c-8633-116ced6e1723"
    },
    {
      "name": "Rubens",
      "cpf": "25825825800",
      "crm": "258741",
      "title": "Urologia",
      "description": "Trata de problemas do trato urinário em homens e mulheres, além de questões relacionadas ao sistema reprodutivo masculino.",
      "id": "d467497f-06ac-4973-8d76-e2ef835806da"
    },
    {
      "name": "Suamy",
      "cpf": "12332112300",
      "crm": "369563",
      "title": "Reumatologista",
      "description": "Foca em doenças reumáticas, como artrite e outras condições que afetam articulações, ossos e tecidos conjuntivos.",
      "id": "22250e60-bca1-4f5b-bbd4-876b8f0efac6"
    },
    {
      "name": "Suverleide",
      "cpf": "12345678933",
      "crm": "12345",
      "title": "Medico Esportivo",
      "description": "Lida com a saúde de atletas, abrangendo prevenção, diagnóstico e tratamento de lesões relacionadas à prática esportiva.",
      "id": "808b9a89-5a72-4cc2-8405-dcba712adfac"
    },
    {
      "name": "Wendel",
      "cpf": "36925814789",
      "crm": "321654",
      "title": "Infectologia",
      "description": "Especialidade que se dedica ao estudo, diagnóstico e tratamento de doenças infecciosas causadas por vírus, bactérias, fungos ou parasitas.",
      "id": "cd6b69bd-f181-4ffc-a9cf-092e8959524b"
    }
  ];
  for (const doctor of listagem) {
    try {
      await axios.post(`${url}:${port}/`, doctor);
    } catch (error: any) {
      console.log("Erro: " + error.message);
    }
  }
}

async function getAllDoctors(): Promise<undefined | Array<{}>> {
  try {
    let doctors = await axios.get(`${url}:${port}/`);
    return doctors.data;
  } catch (error: any) {
    console.log("Deu erro: " + error.message);
  }
}

async function addDoctor(): Promise<undefined | {}> {
  const result = await axios.post(`${url}:${port}/`,
    {
      "name": await input_keyboard("Informe o nome do médico: "),
      "cpf": await input_keyboard("Informe o cpf com somente os 11 dígitos: "),
      "crm": await input_keyboard("Informe o CRM (máximo de 6 caracteres): "),
      "title": await input_keyboard("Informe a especialidade: "),
      "description": await input_keyboard("Digite a descrição do que compreende esse título anterior: ")
    }
  );
  return result.data;
}

async function getDoctor(): Promise<undefined | Array<{}>> {
  let props = ["ID", "CPF", "CRM", "NAME"];
  let key: string, value: string, k: number;
  while (true) {
    for (let i = 0; i < props.length; i++) console.log(i + 1, "-", props[i]);
    key = (await input_keyboard("Informe a propriedade a ser usada para busca do médico: ")).toUpperCase();
    value = (await input_keyboard("Informe o valor da propriedade a ser usado para busca do médico: ")).toLowerCase();
    k = Number(key) - 1;
    if (isNaN(k) && props.includes(key)) break;
    if (k >= 0 && k < props.length) {
      key = props[k];
      break;
    }
    console.log("Escolha novamente!");
  }
  const doctor = await getDoctorByProperty(key, value);
  if (doctor) return doctor;
}

async function getOneDoctor(): Promise<undefined | {}> {
  let index = 0;
  let result = await getDoctor();
  if (result) {
    while (result.length > 1) {
      console.log("Escolha o index do médico que deseja informações: ");
      console.table(result, ["name", "crm", "title"]);
      index = Number(await input_keyboard());
      if (index >= 0 && index < result.length) { break; }
      else console.log("Opção inválida!");
    }
    if (result.length > 0) return result[index];
  }
}

async function updateDoctor(): Promise<any> {
  let doctor: any = await getOneDoctor();
  if (doctor) {
    /*
    console.table(result.splice(index, 1), ["name", "cpf", "title", "description"]);
    console.table(result.splice(index, 1));
    console.log(JSON.stringify(result[index]));
    console.table([result[index]], ["name", "cpf", "title", "description"]);
    delete result[index].id // Caso queira omitir o id da exibição
    */
    console.table(doctor);
    let option;
    for (const i in doctor) {
      if (i == 'id' || i == 'cpf') continue;
      console.log(`Valor atual do(a) ${i}: ${doctor[i]}`);
      option = (await input_keyboard(`Defina o valor do(a) '${i}' ou só dê enter para manter o valor atual: `)).trim();
      if (option) doctor[i] = option;
    }
    try {
      doctor = await axios.put(`${url}:${port}/`, doctor);
      doctor = doctor.data;
    } catch (error: any) {
      console.log("Erro ao atualizar médico: " + error.message);
    }
  }
  return doctor;
}

async function getDoctorByCPF(cpf: string): Promise<any> {
  try {
    const doctor = await axios.get(`${url}:${port}/cpf/${cpf}`);
    if (doctor)
      return [doctor.data];
    else
      console.log("Médico não encontrado");
  } catch (error: any) {
    let msg = "Médico não encontrado."
    if (error.response.status != 404 ) msg = error.message
    console.log("Falha: " + msg);
  }
}

async function getDoctorById(id: string): Promise<any> {
  try {
    const doctor = await axios.get(`${url}:${port}/id/${id}`);
    if (doctor)
      return doctor.data;
    else
      console.log("Médico não encontrado");
  } catch (error: any) {
    let msg = "Médico não encontrado."
    if (error.response.status != 404) msg = error.message
    console.log("Falha: " + msg);
  }
}

async function getDoctorByCRM(crm: string): Promise<undefined | Array<{}>> {
  try {
    const doctor = await axios.get(`${url}:${port}/crm/${crm}`);
    if (doctor)
      return [doctor.data];
    else
      console.log("Médico não encontrado");
  } catch (error: any) {
    let msg = "Médico não encontrado."
    if (error.response.status != 404) msg = error.message
    console.log("Falha: " + msg);
  }
}

async function getDoctorsByName(name: string): Promise<undefined | Array<{}>> {
  try {
    const doctor = await axios.get(`${url}:${port}/name/${name}`);
    if (doctor && doctor.data.length > 0)
      return doctor.data;
    else
      console.log("Médico não encontrado");
  } catch (error: any) {
    let msg = "Médico não encontrado."
    if (error.response.status != 404) msg = error.message
    console.log("Falha: " + msg);
  }
}

async function getDoctorByProperty(property: string, value: any): Promise<undefined | Array<{}>> {
  let doctor: undefined | Array<{}> = undefined;
  switch (property.toLowerCase()) {
    case 'cpf':
      doctor = await getDoctorByCPF(value);
      break;
    case "id":
      doctor = [await getDoctorById(value)];
      break;
    case "crm":
      doctor = await getDoctorByCRM(value);
      break;
    case "name":
      doctor = await getDoctorsByName(value);
      break;
    default:
      console.log("Propriedade inválida.");
      break;
  }
  return doctor;
}

async function deleteDoctorById(id: string): Promise<undefined | {}> {
  let doctorDeleted;
  try {
    doctorDeleted = await axios.delete(`${url}:${port}/${id}`);
    return doctorDeleted.data;
  } catch (error: any) {
    console.log("Falha o deletar médico: "+ error.message);
  }
}

async function deleteDoctor(): Promise<undefined | {}> {
  let doctor: any = await getOneDoctor();
  if (doctor) {
  console.table([doctor], ["name", "crm", "title"]);
    let choice: string = await input_keyboard("O médico acima foi encontrado na base de dados, digite 1 para confirmar, ou tecle enter para cancelar: ");
    if (choice.trim() == '1') {
      let result = await deleteDoctorById(doctor.id);
      return result;
    } else console.log("Exclusão cancelada.");
  } else console.log("Médico não encontrado.");
}

async function menu(): Promise<void> {
  let recall: boolean = true, opt: string, doctor: undefined | {};
  // opt = await input_keyboard("Digite 1 para popular o banco de dados preliminarmente ou 0 para ignorar: ");
  // if (opt == '1') await fillDataBase();

  let menu =
    `
  ,________CRUD_________,
  |0 - Sair             |
  |1 - Adicionar Médico |
  |2 - Obter Médico     |
  |3 - Atualizar Médico |
  |4 - Apagar Médico    |
  |5 - Todos os Médicos |
  '''''''''''''''''''''''
  `;
  while (recall) {
    console.log(menu);
    opt = await input_keyboard("Set an option: ");
    console.clear();
    switch (opt) {
      case '0':
        console.log("Até a próxima!");
        recall = false;
        break;
      case '1':
        doctor = await addDoctor();
        if (doctor) console.log("Adicionado com sucesso.");
        break;
      case '2':
        doctor = await getOneDoctor();
        if (doctor)
          console.table(doctor);
        break;
      case '3':
        doctor = await updateDoctor();
        if (doctor)
          console.table(doctor);
        break;
      case '4':
        doctor = await deleteDoctor();
        if (doctor) {
          console.log("O seguinte médico foi excluido do banco de dados:");
          console.table(doctor);
        }
        break;
      case '5':
        const doctors = await getAllDoctors();
        if (doctors && doctors.length > 0) {
          console.log("Listando médicos:");
          console.table(doctors, ["id", "name", "crm", "title"]);
        } else console.log("Não há médicos cadastrados.");
        break;
      default:
        console.log("Opção inválida");
        break;
    }
  }
  exit();

}

async function start(): Promise<void> {
  if (url == 'http://localhost') await server(port);
  await menu();
}

start();