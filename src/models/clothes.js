'use strict';
const uuid = require('uuid').v4;
class Clothes {
    constructor() {
        this.datastorage = []
    }
    create(item) {
        const save = {
            id: uuid(),
            data: item,
        };
        this.datastorage.push(save);
        return save;
    };
    read(id) {
        if (id) {
          return this.datastorage.find((record) => record.id === id);
        } else {
          return this.datastorage;
        }
      }
    update(id, item) {
        for (let i = 0; i < this.datastorage.length; i++) {
            if (this.datastorage[i].id === id) {
                this.datastorage[i].data = item;
                return this.datastorage[i];
            }
        }
    }
    delete(id) {
        this.datastorage = this.datastorage.filter((item) => item.id !== id);
        return this.datastorage;
    }
}
module.exports = Clothes;