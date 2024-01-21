create database api_ada_vem_ser_tech;
use api_ada_vem_ser_tech;

CREATE TABLE `tb_doctor` ( 
  `id` VARCHAR(255) NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `cpf` CHAR(11) NOT NULL,
  `crm` VARCHAR(10) NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`id`),
  CONSTRAINT `unique_cpf` UNIQUE (`cpf`),
  CONSTRAINT `unique_crm` UNIQUE (`crm`)
);
SET FOREIGN_KEY_CHECKS = 0;
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('0461e28c-176c-423d-aa2b-75e6da633018', 'Suamy', '12332112300', '369563', 'Reumatologista', 'Foca em doenças reumáticas, como artrite e outras condições que afetam articulações, ossos e tecidos conjuntivos.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('0b971196-ebaf-4bb7-9be9-aed4b34b7616', 'Wendel', '36925814789', '321654', 'Infectologia', 'Especialidade que se dedica ao estudo, diagnóstico e tratamento de doenças infecciosas causadas por vírus, bactérias, fungos ou parasitas.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('3122a367-338f-48ef-8868-603bdc5d3a40', 'Matheus', '45632147899', '521453', 'Ortopedista', 'Lida com problemas do sistema musculoesquelético, incluindo ossos, articulações, músculos e tendões.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('3441cccc-6365-4011-9f74-31b01df162c8', 'Fábio', '10450260399', '985540', 'Neurocirurgião', 'Realiza cirurgias no sistema nervoso, incluindo cérebro, medula espinhal e nervos periféricos, para tratar condições neurológicas.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('3ae00f23-aa00-4934-8716-30633d117be4', 'João Marcos', '59685695633', '520631', 'Neurologista', 'Lida com o diagnóstico e tratamento de distúrbios neurológicos, como epilepsia, enxaqueca e acidente vascular cerebral.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('4b006ec4-4bfe-404a-920b-6d6958be30a0', 'Jessany', '98569856544', '989898', 'Pneumologista', 'nENHUMA A MAIS');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('59443715-086e-462b-aa28-b8c8d011f674', 'Suverleide', '12345678933', '123450', 'Medico Esportivo', 'Lida com a saúde de atletas, abrangendo prevenção, diagnóstico e tratamento de lesões relacionadas à prática esportiva.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('65aa4039-96e4-4bd0-9561-76781ea787b3', 'Ivison', '32101230255', '587413', 'Gastroenterologista', 'Trata de doenças do trato digestivo, incluindo estômago, intestinos, fígado e pâncreas.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('724a1b33-560c-49e6-af76-141c0ac3ae6b', 'Tiririca', '00000000001', '303030', 'Palhaçada', 'Profissional voltado a despertar o bom humor.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('7a40e4b6-53f9-4d16-8a76-dfd9f05cb60b', 'Igor', '95432105231', '410413', 'Geriatra', 'Foca no cuidado de idosos, abordando questões de envelhecimento, saúde mental e doenças associadas à idade.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('83be91a0-fbf9-4437-9b31-4f76a651145f', 'Luis', '32101310200', '741147', 'Oncologista', 'Trata de cânceres, incluindo diagnóstico, tratamento e acompanhamento de pacientes com câncer.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('87ae61e3-14b6-4f08-bc55-9781db8fbfc7', 'Ailézig', '32165412159', '123400', 'Cardiologista', 'Especialidade médica que se dedica ao diagnóstico e tratamento de doenças do coração e do sistema cardiovascular.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('9700be6d-1dde-4375-a4d0-17594db53ef5', 'Rubens', '25825825800', '258741', 'Urologia', 'Trata de problemas do trato urinário em homens e mulheres, além de questões relacionadas ao sistema reprodutivo masculino.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('99b42b66-2655-4bb7-9858-37c7d4d047ab', 'Patrick Vilhena', '96385296312', '963962', 'Psiquiatra', 'Lida com transtornos mentais, distúrbios emocionais e problemas psicológicos, proporcionando tratamento e terapia.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('9d11a30c-a3f8-4c24-8feb-a73552450116', 'Patrick Lima', '96396395100', '123132', 'Pediatra', 'Especializado na saúde de crianças, abordando questões pediátricas, desenvolvimento infantil e prevenção de doenças.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('aa5355f5-9da8-4ca2-9517-66a49d2b4535', 'Gabriel', '01312332100', '444111', 'Hematologia', 'Trata de doenças do sangue, incluindo anemias, distúrbios de coagulação e cânceres sanguíneos.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('aebb706b-fb9e-4ac6-9868-1c0adc66fbbd', 'Jamiely', '74101474100', '741014', 'Nefrologista', 'Trata de doenças renais, incluindo insuficiência renal, hipertensão renal e distúrbios do equilíbrio hídrico.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('afec936c-c6f7-4b2e-9e00-77646122f0ce', 'Djair', '67183492500', '598102', 'Mastologista', 'Especializado na saúde das mamas. Tanto em mulheres quanto em homens.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('becab279-0b15-41e5-9d12-d5830002d384', 'Christiane', '14789632145', '123664', 'Endocrinologista', 'Especialidade que se concentra nos distúrbios hormonais e no sistema endócrino, como diabetes e distúrbios da tireoide.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('c67b4066-c5be-48ac-96a4-e3186f99dcd2', 'João Proti', '74101478966', '635416', 'Obstetra', 'Foca na saúde da mulher durante a gravidez, parto e pós-parto, bem como no cuidado do feto.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('cc3bef61-32e6-46c4-80ab-ee75926e1939', 'Gabriela', '85874796900', '951032', 'Ginecologista', 'Especialidade voltada para a saúde da mulher, tratando questões relacionadas ao sistema reprodutivo feminino.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('cd33eb19-893d-490a-b5ef-33e72265ffae', 'Paulo', '32132165411', '369369', 'Radiologista', 'Especialidade que utiliza técnicas de imagem, como raios-X e ressonância magnética, para diagnosticar e tratar condições médicas.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('d6fb897d-1b2b-4999-8cf9-20969fa094ca', 'Marília', '85296385200', '564645', 'Oftalmologista', 'Especialidade que cuida da saúde ocular, tratando condições como miopia, catarata e glaucoma.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('d718cbfb-aead-4d74-be28-5688f18ecd36', 'Edson', '35795146500', '654987', 'Biomédico', 'Responsável por usar quantidades pequenas de radioisótopos, ou também chamado de radiofármacos, com o objetivo de examinar melhor a função de órgãos que estão em foco num diagnóstico.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('e8a2c30d-8f11-46cb-91ae-84364079061b', 'Bruno', '32165412119', '123511', 'Dermatologista', 'Área médica que trata das doenças relacionadas à pele, cabelo e unhas, além de problemas dermatológicos.');
INSERT INTO `tb_doctor` (`id`, `name`, `cpf`, `crm`, `title`, `description`) VALUES ('f7901ddd-b612-4484-bdf9-1f3f25b869c3', 'Murilo', '12301232144', '520520', 'Otorrinolaringologista', 'Trata de distúrbios do ouvido, nariz, garganta, cabeça e pescoço, incluindo audição e equilíbrio.');
SET FOREIGN_KEY_CHECKS = 1;
