const { signUpSuccess, signUpFail } = require('./register')
const { signIn, signInFail } = require('./signIn')
const { v4: uuidv4 } = require('uuid');
const { getAllUser, getUserWithPaginate, updateUser, deleteUser } = require('./userMethod');
const { getAllPet, getPetWithPaginate, createPet } = require('./petMethod');
const { getAllDoctor, getDoctorWithQuantity, getDoctorById, getScheduleOfDoctorById, updateDetailDoctor } = require('./doctorMethod');
let user_accessToken
let countUserRegis = uuidv4()
// let authorization = 
const DATA_TEST_EMAIL = `user${countUserRegis}@gmail.com`

const DATA_TEST_PASSWORD = '123456'


const authenticated = async (callback) => {
    if (!user_accessToken) {
        signIn('admin@gmail.com', DATA_TEST_PASSWORD).then(data => {
            user_accessToken = data.body.metadata.token.accessToken
        })
    }
    return callback.set('Authorization', `Bearer ${user_accessToken}`)
}

describe(`Юнит-тестирование`, () => {
    describe(`Проверка метода регистрации пользователя `, () => {
        test('Успешная регистрация', async () => {
            return signUpSuccess().then(data => {
                // console.log(data)
                expect(data.status).toEqual(201)
            })
        })

        test('Ошибка регистрации', async () => {
            return signUpFail().catch(data => {
                // console.log(data)
                expect(data.status).toEqual(400)
            })
        })
    })
    describe(`Проверка метода аутентификации пользователя `, () => {
        test('Успешный вход ', async () => {

            return signIn().then(data => {
                expect(data.status).toEqual(200)
                // console.log(data.body)
                expect(data.body.metadata).toBeTruthy()
                user_accessToken = data.body.metadata.token.accessToken
                // console.log(user_accessToken)
            })

        })

        test('Ошибка входа', async () => {

            return signInFail().catch(data => {
                // console.log(data.statusCode)
                expect(data.status).toEqual(404)

            })

        })
    })



})

describe(`Интеграционное тестирование`, () => {
    describe('Проверка метода аутентификации пользователя после регистрации', () => {
        test('Успешная регистрация', async () => {
            return signUpSuccess(DATA_TEST_EMAIL, DATA_TEST_PASSWORD).then(data => {
                // console.log(data)
                expect(data.status).toEqual(201)
            })
        })

        test('Успешный вход', async () => {

            return signIn(DATA_TEST_EMAIL, DATA_TEST_PASSWORD).then(data => {
                expect(data.status).toEqual(200)
                // console.log(data.body)
                expect(data.body.metadata).toBeTruthy()
                user_accessToken = data.body.metadata.token.accessToken
                // console.log(user_accessToken)
            })

        })

    })
    describe(`Проверка метода update/get/post после входа в систему как администратор`, () => {
        test('Успешный вход', async () => {

            return signIn(DATA_TEST_EMAIL, DATA_TEST_PASSWORD).then(data => {
                expect(data.status).toEqual(200)
                // console.log(data.body)
                expect(data.body.metadata).toBeTruthy()
                user_accessToken = data.body.metadata.token.accessToken
                // console.log(user_accessToken)
            })

        })
        test('получение списка пользователей', async () => {
            return authenticated(getAllUser()).then(data => {
                // console.log(data)
                expect(data.status).toEqual(200)
            }).catch(data => {
                // console.log(data)
            })
        })



        test(`Обновление успеха пользователя`, async () => {
            return authenticated(updateUser()).then(data => {
                expect(data.status).toEqual(200)
            }).catch(data => {
            })
        })

        test(`Удаление успех пользователя`, async () => {
            return authenticated(deleteUser()).then(data => {
                expect(data.status).toEqual(200)
            }).catch(data => {
            })
        })
    })
    describe(`Проверка методов для врачей после входа в систему как администратор`, () => {
        test('получение администратором списка врачей', async () => {
            return authenticated(getAllDoctor()).then(data => {
                // console.log(data)
                expect(data.status).toEqual(200)
            }).catch(data => {
                // console.log(data)
            })
        })
        test('создание администратором информации о враче ', async () => {
            return authenticated(updateDetailDoctor()).then(data => {
                // console.log(data)
                expect(data.status).toEqual(201)
            }).catch(data => {
                // console.log(data)
            })
        })

        test('получение информации о враче с id=17', async () => {
            return authenticated(getDoctorById()).then(data => {
                // console.log(data)
                expect(data.status).toEqual(200)
            }).catch(data => {
                // console.log(data)
            })
        })

        test('получение расписания врача с id=17 на дату 05.04.2023', async () => {
            return authenticated(getScheduleOfDoctorById()).then(data => {
                // console.log(data)
                expect(data.status).toEqual(200)
            }).catch(data => {
                // console.log(data)
            })
        })
    })
})


// describe(`Test authenticate & authorization method `, () => {
//     test('Sign In and get Access Token', async () => {

//         return signIn().then(data => {
//             expect(data.status).toEqual(200)
//             // console.log(data.body)
//             expect(data.body.metadata).toBeTruthy()
//             user_accessToken = data.body.metadata.token.accessToken
//             // console.log(user_accessToken)
//         })

//     })

//     test('Sign In failed', async () => {

//         return signInFail().catch(data => {
//             // console.log(data.statusCode)
//             expect(data.status).toEqual(404)

//         })

//     })

//     test('Register new user success', async () => {
//         return signUpSuccess().then(data => {
//             // console.log(data)
//             expect(data.status).toEqual(201)
//         })
//     })

//     test('Register new user fail', async () => {
//         return signUpFail().catch(data => {
//             // console.log(data)
//             expect(data.status).toEqual(400)
//         })
//     })
// })



// describe(`Test all method with user`, () => {
//     test('Get All User', async () => {
//         return authenticated(getAllUser()).then(data => {
//             // console.log(data)
//             expect(data.status).toEqual(200)
//         }).catch(data => {
//             // console.log(data)
//         })
//     })

//     test('Get User With paginate', async () => {
//         return authenticated(getUserWithPaginate()).then(data => {
//             expect(data.status).toEqual(200)
//         }).catch(data => {
//         })
//     })

//     test(`Update user success`, async () => {
//         return authenticated(updateUser()).then(data => {
//             expect(data.status).toEqual(200)
//         }).catch(data => {
//         })
//     })


//     test(`Delete user success`, async () => {
//         return authenticated(deleteUser()).then(data => {
//             expect(data.status).toEqual(200)
//         }).catch(data => {
//         })
//     })
// })

// describe(`Test all method with pet гггг`, () => {

//     // test('Create Pet', async () => {
//     //     return authenticated(createPet()).then(data => {
//     //         // console.log(data)
//     //         expect(data.status).toEqual(201)
//     //     }).catch(data => {
//     //         // console.log(data)
//     //     })
//     // })

//     test('Get All Pet', async () => {
//         return authenticated(getAllPet()).then(data => {
//             // console.log(data)
//             expect(data.status).toEqual(200)
//         }).catch(data => {
//             // console.log(data)
//         })
//     })

//     test('Get Pet With paginate', async () => {
//         return authenticated(getPetWithPaginate()).then(data => {
//             expect(data.status).toEqual(200)
//         }).catch(data => {
//         })
//     })


// })

// describe(`Test all method with doctor`, () => {
//     test('Get All Doctor', async () => {
//         return authenticated(getAllDoctor()).then(data => {
//             // console.log(data)
//             expect(data.status).toEqual(200)
//         }).catch(data => {
//             // console.log(data)
//         })
//     })

//     test('Get Doctor with quantity', async () => {
//         return authenticated(getDoctorWithQuantity()).then(data => {
//             // console.log(data)
//             expect(data.status).toEqual(200)
//         }).catch(data => {
//             // console.log(data)
//         })
//     })

//     test('Get Doctor By Id', async () => {
//         return authenticated(getDoctorById()).then(data => {
//             // console.log(data)
//             expect(data.status).toEqual(200)
//         }).catch(data => {
//             // console.log(data)
//         })
//     })

//     test('Get Schedule Of Doctor', async () => {
//         return authenticated(getScheduleOfDoctorById()).then(data => {
//             // console.log(data)
//             expect(data.status).toEqual(200)
//         }).catch(data => {
//             // console.log(data)
//         })
//     })

//     test('Update Info Of Doctor', async () => {
//         return authenticated(updateDetailDoctor()).then(data => {
//             // console.log(data)
//             expect(data.status).toEqual(201)
//         }).catch(data => {
//             // console.log(data)
//         })
//     })
// })
