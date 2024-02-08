// Пришлось переименовать методы относительно задачки из-за конфликта имен
class User {
    constructor(params) {
      this.name = params.name;
      this.age = params.age;
      this.skills = params.skills;
    }

    static setName(name) {
        return class extends this {
            static savedName = name
        }
    }

    static setAge(age) {
        return class extends this {
            static savedAge = age
        }
    }

    static setSkills(skills) {
        return class extends this {
            static savedSkills = skills
        }
    }

    static create() {
        const params = {
            name: this.savedName,
            age: this.savedAge,
            skills: this.savedSkills,
        }
        return new User(params)
    }
  }

  console.log(User.setAge(47).setName('Bob').setAge(10).setSkills(['Coding']).create()); // User({name: 'Bob', age: 47, skills: ['Coding']})
