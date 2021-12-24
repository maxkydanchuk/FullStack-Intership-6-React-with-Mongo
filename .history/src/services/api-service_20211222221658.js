export default class apiService {
  //https://swapi.dev/api

  _apiBase = "http://localhost:5000/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
  }

  getAllPeople = async (param, query , value ) => {

    let res;
    if(param && query && value) {
      res = await this.getResource(`/people?page=1&size=10&sortOrder=${param}&sortBy=${query}&search=${value}`)
    }
    else if(param && query) {
       res = await this.getResource(`/people?page=1&size=10&sortOrder=${param}&sortBy=${query}`)
    } 
    else if(value) {
      res = await this.getResource(`/people?page=1&size=10&search=${value}`)
    }  else {
      res = await this.getResource(`/people/&page=1&size=3`)
    }
    
    return this._adaptPeople(res);
  };
  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return person;
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res;
  };
  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return starship;
  };
  
  // sort = async (collection, param, query) => {
  //   const res = await this.getResource(`/${collection}?sortOrder=${param}&sortBy=${query}`);
  //   return this._adaptPeople(res)
  // }

  // search = async (collection, value) => {
  //   const res = await this.getResource(`/${collection}?search=${value}`);
  //   return this._adaptPeople(res)
  // }

  _adaptPeople = (data) => {
    const result = [];

    data.forEach((person) => {
      const { _id, fields } = person;
      const {
        name: name,
        birth_year: birthYear,
        eye_color: eyeColor,
        height,
        gender,
        mass,
      } = fields;
      result.push({ _id, name, birthYear, eyeColor, height, gender, mass });
    });

    return result;
  };
}
