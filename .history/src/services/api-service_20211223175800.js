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

  getAllPeople = async (param, query , value, currentPage, pageSize) => {

    let res;
    if(param && query && value) {
      res = await this.getResource(`/people?page=${currentPage}&size=${pageSize}&sortOrder=${param}&sortBy=${query}&search=${value}`)
    }
    else if(param && query) {
       res = await this.getResource(`/people?page=${currentPage}}&size=${pageSize}&sortOrder=${param}&sortBy=${query}`)
    } 
    else if(value) {
      res = await this.getResource(`/people?page=${currentPage}&size=${pageSize}&search=${value}`)
    }  else {
      res = await this.getResource(`/people?page=${currentPage}&size=${pageSize}`)
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

  _adaptPeople = (data) => {
    const result = [];


    data.forEach((person) => {
      const { _id, fields } = person;
      const {
        name,
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
