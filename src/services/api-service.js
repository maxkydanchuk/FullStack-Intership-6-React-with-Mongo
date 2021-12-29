export default class apiService {

  _apiBase = "http://localhost:5000/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
  }

  async postResource(url, data = {}) {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
  }

   deleteResource  = async(url, id) => {
    const res = await fetch(`${this._apiBase}/${url}/${id}`, {
      method: 'DELETE'
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
  }

  updateResource  = async(url, id, data ={}) => {
    const res = await fetch(`${this._apiBase}/${url}/${id}/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
  }

  getAllPeople = async (param, query , value, currentPage, pageSize) => {

    let res = [];
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

    return {data:this._adaptPeople(res), totalCount: res.totalCount};
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return person;
  };

  getAllStarships = async (param, query , value, currentPage, pageSize) => {

    let res = [];
    if(param && query && value) {
      res = await this.getResource(`/starships?page=${currentPage}&size=${pageSize}&sortOrder=${param}&sortBy=${query}&search=${value}`)
    }
    else if(param && query) {
       res = await this.getResource(`/starships?page=${currentPage}}&size=${pageSize}&sortOrder=${param}&sortBy=${query}`)
    } 
    else if(value) {
      res = await this.getResource(`/starships?page=${currentPage}&size=${pageSize}&search=${value}`)
    }  else {
      res = await this.getResource(`/starships?page=${currentPage}&size=${pageSize}`)
    }
    
    return {data:this._adaptStaships(res), totalCount: res.totalCount};
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return starship;
  };

  createStarship = async (item) => {
    const newStarship = await this.postResource('/starships/', item)
    return newStarship;
  }

  // deleteItem = async (url, id) => {
  //   const deletedStarship = await this.deleteResource(`/${url}/${id}`)
  //   return deletedStarship
  // }

  // updateItem = async (url, id, item) => {
  //   const updatedItem = await this.updateResource(`/${url}/${id}`)
  //   return updatedItem
  // }

  _adaptPeople = (data) => {
    const result = [];
    
    data.data.forEach((person) => {
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

  _adaptStaships = (data) => {
    const result = [];
    data.data.forEach((starship) => {
      const { _id, fields } = starship;
      const {
        pilots,
        MGLT,
        starship_class: starshipClass,
        hyperdrive_rating: hyperdriveRating,
 
      } = fields;
      result.push({ _id, pilots, MGLT, starshipClass, hyperdriveRating });
    });

    return result;
  };
}





