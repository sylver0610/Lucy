const baseURL = 'http://localhost:3052/v1/api'
const superagent = require('superagent');

const CONTENTHTML = `<p><strong>Опыт работы:</strong></p>
<p>На втором курсе академии принят на работу  в ветеринарную клинику &quot;Центр&quot;, и 4 года совмещал учебу в академии с работой в клинике в качестве ассистента ветеринарного врача. Получил опыт работы в отделении терапии, интенсивной терапии, хирургическом отделении;</p>
<p>2010-2013г работа в качестве ассистента ветеринарного врача в составе вызывной службы ветеринарной клиники &quot;Центр&quot;;</p>
<p>С 2013 года  по настоящее ветеринарный врач-терапевт ветеринарной клиники &quot;Центр&quot;;</p>
<p>С 2013 года по настоящее время врач вызывной службы ветеринарной клиники &quot;Центр&quot;;</p>
<p>2016 год эксперт рубрики &quot;Pets&quot; в газета.ru</p>
`
const CONTENTMarkdown = `**Опыт работы:**

На втором курсе академии принят на работу  в ветеринарную клинику "Центр", и 4 года совмещал учебу в академии с работой в клинике в качестве ассистента ветеринарного врача. Получил опыт работы в отделении терапии, интенсивной терапии, хирургическом отделении;

2010-2013г работа в качестве ассистента ветеринарного врача в составе вызывной службы ветеринарной клиники "Центр";

С 2013 года  по настоящее ветеринарный врач-терапевт ветеринарной клиники "Центр";

С 2013 года по настоящее время врач вызывной службы ветеринарной клиники "Центр";

2016 год эксперт рубрики "Pets" в газета.ru`

const DESC = `Ветеринарный врач клиники «Центр» на Цветном бульваре. Специализация — общая терапия.`

const getAllDoctor = () => {
    return superagent.get(`${baseURL}/doctor?limit=max`)
}

const getDoctorWithQuantity = (limit = 5) => {
    return superagent.get(`${baseURL}/doctor?limit=${limit}`)
}

const getDoctorById = (id = 17) => {
    return superagent.get(`${baseURL}/doctor/detail-doctor-by-id?id=${id}`)
}

const updateDetailDoctor = (contentHTML = CONTENTHTML, contentMarkdown = CONTENTMarkdown, description = DESC, doctorId = 17) => {
    return superagent.post(`${baseURL}/doctor`).send({ contentHTML, contentMarkdown, description, doctorId })
}

const getScheduleOfDoctorById = (id = 17, date = '2023-05-04') => {
    return superagent.get(`${baseURL}/doctor/get-schedule-of-doctor-by-id?id=${id}&date=${date}`)
}

module.exports = {
    getAllDoctor,
    getDoctorWithQuantity,
    getDoctorById,
    updateDetailDoctor,
    getScheduleOfDoctorById
}