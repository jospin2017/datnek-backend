const langageService = require('../Services/langue.service');


module.exports = {


    async getAllLangages(req,res){

        return langageService.getAllLangages(req,res)
    },

    async createLangage(req,res){

        return langageService.createLangage(req,res);
    },

    async getLangageById(req,res){

        return langageService.getLangageById(req,res);
    },

    async updateLanguage(req,res){

        return langageService.updateLanguage(req,res);
    },

    async deleteLangage(req,res){

        return langageService.deleteLangage(req,res);
    }
}