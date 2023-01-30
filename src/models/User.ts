
export class User {
     
    constructor(
        private id:string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string
        ) {}
      
        /**
         * getId - pegar um o id do objeto
         */
        public getId():string {
            return this.id 
        }

        /**
         * setId() - método public seguro para alterar id do objeto
         */
        public setId(value:string):void {
            this.id = value
        }

        public getName(): string {
            return this.name
        }
        public setName(value: string):void {
            this.name = value
        }
        public getCreatedAt(): string {
            return this.createdAt
        }
        public setCreatedAt(value: string):void {
            this.createdAt = value
        }
        public getPassword(): string {
            return this.password
        }
        public setPassword(value: string):void {
            this.password = value
        }
        public getEmail(): string {
            return this.email
        }
        public setEmail(value: string):void {
            this.email = value
        }

     }

     //instanciando a classe User. 
const user = new User(
    "u003",
    "Astrodev",
    "astrodev@devinho",
    "senha12345$",
    "2023-01-30 10:02:00"
)
const user2 = new User(
    "u024",
    "outroDevinho",
    "ast@devinho",
    "senha12345$",
    "2023-01-30 10:06:00"
)


const nameDoUser = user2.getName()
user2.setName("Labiru")


console.log("id do user: ",user.getId())

console.table(user2)

user2.setId("u004")

console.table(user2)


// console.table(user2)

// Crie a pasta src/models e dentro dela crie o arquivo User.ts
// Crie e exporte a classe User de src/models/User.ts
// lembre-se de utilizar a sintaxe reduzida
// implemente o encapsulamento dos atributos

//  id: string,
//  name: string,
//  email: string,
//  password: string,
//  createdAt: string