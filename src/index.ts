import { setTimeout } from "timers/promises";
import { server } from "./Server";
import * as readline from 'readline'
import { exit } from "process";

const axios = require('axios');

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const port = 80;

function input_keyboard(msg: string = ""): Promise<string> {
  const promisse = new Promise<string>((resolve) => {
    readLine.question(msg, (resposta) => {
      resolve(resposta);
    });
  });
  return promisse;
}

async function fillDataBase(): Promise<void>{
  const listagem = {
    "medicos": [
      {
        "name": "Ailézig",
        "cpf": "32165412159",
        "crm": "123400",
        "title": "Cardiologista",
        "description": "Especialidade médica que se dedica ao diagnóstico e tratamento de doenças do coração e do sistema cardiovascular."
      }, {
        "name": "Bruno",
        "cpf": "32165412119",
        "crm": "123511",
        "title": "Dermatologista",
        "description": "Área médica que trata das doenças relacionadas à pele, cabelo e unhas, além de problemas dermatológicos."
      },
      {
        "name": "Christiane",
        "cpf": "14789632145",
        "crm": "123664",
        "title": "Endocrinologista",
        "description": "Especialidade que se concentra nos distúrbios hormonais e no sistema endócrino, como diabetes e distúrbios da tireoide."
      },
      {
        "name": "Djair",
        "cpf": "67183492500",
        "crm": "598102",
        "title": "Mastologista",
        "description": "Especializado na saúde das mamas. Tanto em mulheres quanto em homens."
      },
      {
        "name": "Edson",
        "cpf": "35795146500",
        "crm": "654987",
        "title": "Biomédico",
        "description": "Responsável por usar quantidades pequenas de radioisótopos, ou também chamado de radiofármacos, com o objetivo de examinar melhor a função de órgãos que estão em foco num diagnóstico."
      },
      {
        "name": "Fábio",
        "cpf": "10450260399",
        "crm": "985540",
        "title": "Neurocirurgião",
        "description": "Realiza cirurgias no sistema nervoso, incluindo cérebro, medula espinhal e nervos periféricos, para tratar condições neurológicas."
      },
      {
        "name": "Gabriel",
        "cpf": "01312332100",
        "crm": "444111",
        "title": "Hematologia",
        "description": "Trata de doenças do sangue, incluindo anemias, distúrbios de coagulação e cânceres sanguíneos."
      },
      {
        "name": "Gabriela",
        "cpf": "85874796900",
        "crm": "951032",
        "title": "Ginecologista",
        "description": "Especialidade voltada para a saúde da mulher, tratando questões relacionadas ao sistema reprodutivo feminino."
      },
      {
        "name": "Igor",
        "cpf": "95432105231",
        "crm": "410413",
        "title": "Geriatra",
        "description": "Foca no cuidado de idosos, abordando questões de envelhecimento, saúde mental e doenças associadas à idade."
      },
      {
        "name": "Ivison",
        "cpf": "32101230255",
        "crm": "587413",
        "title": "Gastroenterologista",
        "description": "Trata de doenças do trato digestivo, incluindo estômago, intestinos, fígado e pâncreas."
      },
      {
        "name": "Jamiely",
        "cpf": "74101474100",
        "crm": "741014",
        "title": "Nefrologista",
        "description": "Trata de doenças renais, incluindo insuficiência renal, hipertensão renal e distúrbios do equilíbrio hídrico."
      },
      {
        "name": "Jessany",
        "cpf": "98569856544",
        "crm": "989898",
        "title": "Pneumologista",
        "description": "Especialidade que se dedica às doenças respiratórias, como asma, doença pulmonar obstrutiva crônica (DPOC) e pneumonia."
      },
      {
        "name": "João Marcos",
        "cpf": "59685695633",
        "crm": "520631",
        "title": "Neurologista",
        "description": "Lida com o diagnóstico e tratamento de distúrbios neurológicos, como epilepsia, enxaqueca e acidente vascular cerebral."
      },
      {
        "name": "João Proti",
        "cpf": "74101478966",
        "crm": "635416",
        "title": "Obstetra",
        "description": "Foca na saúde da mulher durante a gravidez, parto e pós-parto, bem como no cuidado do feto."
      },
      {
        "name": "Luis",
        "cpf": "32101310200",
        "crm": "741147",
        "title": "Oncologista",
        "description": "Trata de cânceres, incluindo diagnóstico, tratamento e acompanhamento de pacientes com câncer."
      },
      {
        "name": "Marília",
        "cpf": "85296385200",
        "crm": "564645",
        "title": "Oftalmologista",
        "description": "Especialidade que cuida da saúde ocular, tratando condições como miopia, catarata e glaucoma."
      },
      {
        "name": "Matheus",
        "cpf": "45632147899",
        "crm": "521453",
        "title": "Ortopedista",
        "description": "Lida com problemas do sistema musculoesquelético, incluindo ossos, articulações, músculos e tendões."
      },
      {
        "name": "Murilo",
        "cpf": "12301232144",
        "crm": "520520",
        "title": "Otorrinolaringologista",
        "description": "Trata de distúrbios do ouvido, nariz, garganta, cabeça e pescoço, incluindo audição e equilíbrio."
      },
      {
        "name": "Patrick Lima",
        "cpf": "96396395100",
        "crm": "123132",
        "title": "Pediatra",
        "description": "Especializado na saúde de crianças, abordando questões pediátricas, desenvolvimento infantil e prevenção de doenças."
      },
      {
        "name": "Patrick Vilhena",
        "cpf": "96385296312",
        "crm": "963962",
        "title": "Psiquiatra",
        "description": "Lida com transtornos mentais, distúrbios emocionais e problemas psicológicos, proporcionando tratamento e terapia."
      },
      {
        "name": "Paulo",
        "cpf": "32132165411",
        "crm": "369369",
        "title": "Radiologista",
        "description": "Especialidade que utiliza técnicas de imagem, como raios-X e ressonância magnética, para diagnosticar e tratar condições médicas."
      },
      {
        "name": "Rubens",
        "cpf": "25825825800",
        "crm": "258741",
        "title": "Urologia",
        "description": "Trata de problemas do trato urinário em homens e mulheres, além de questões relacionadas ao sistema reprodutivo masculino."
      },
      {
        "name": "Suamy",
        "cpf": "12332112300",
        "crm": "369563",
        "title": "Reumatologista",
        "description": "Foca em doenças reumáticas, como artrite e outras condições que afetam articulações, ossos e tecidos conjuntivos."
      },
      {
        "name": "Suverleide",
        "cpf": "12345678933",
        "crm": "123450",
        "title": "Medico Esportivo",
        "description": "Lida com a saúde de atletas, abrangendo prevenção, diagnóstico e tratamento de lesões relacionadas à prática esportiva."
      },
      {
        "name": "Wendel",
        "cpf": "36925814789",
        "crm": "321654",
        "title": "Infectologia",
        "description": "Especialidade que se dedica ao estudo, diagnóstico e tratamento de doenças infecciosas causadas por vírus, bactérias, fungos ou parasitas."
      }
    ]
  }
  for (const doctor of listagem.medicos) {
    try {
      await axios.post(`http://localhost:${port}/`, doctor);
    } catch (error: any) {
      console.log("Erro: " + error.message);
    }
  }
}
async function getAllDoctors(): Promise<any> {
  try {
    let doctors = await axios.get(`http://localhost:${port}/`);
    return doctors.data;
  } catch (error: any) {
    console.log("Deu erro: " + error.message);
  }
}
async function addDoctor(): Promise<any> {
  const result = await axios.post(`http://localhost:${port}/`,
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
async function getDoctor(): Promise<any> {
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
async function getOneDoctor() {
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
      doctor = await axios.put(`http://localhost:${port}/`, doctor);
      doctor = doctor.data;
    } catch (error: any) {
      console.log("Erro ao atualizar médico: " + error.message);
    }
  }
  return doctor;
}
async function getDoctorByCPF(cpf: string): Promise<any> {
  try {
    const doctor = await axios.get(`http://localhost:${port}/cpf/${cpf}`);
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
    const doctor = await axios.get(`http://localhost:${port}/id/${id}`);
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
async function getDoctorByCRM(crm: string): Promise<any> {
  try {
    const doctor = await axios.get(`http://localhost:${port}/crm/${crm}`);
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
async function getDoctorsByName(name:string): Promise<any> {
  try {
    const doctor = await axios.get(`http://localhost:${port}/name/${name}`);
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
async function deleteDoctorById(id: string) {
  let doctorDeleted;
  try {
    doctorDeleted = await axios.delete(`http://localhost:${port}/${id}`);
    return doctorDeleted.data;
  } catch (error: any) {
    console.log("Falha o deletar médico: "+ error.message);
  }
}
async function deleteDoctor(): Promise<undefined | {}>{
  let doctor = await getOneDoctor();
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
  let recall: boolean = true, opt: string, doctor: undefined|{};
  opt = await input_keyboard("Digite 1 para popular o banco de dados preliminarmente ou 0 para ignorar: ");
  if (opt == '1') await fillDataBase();

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

async function start() {
  await server(port);
  await menu();
}

start();