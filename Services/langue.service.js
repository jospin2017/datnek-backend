const Langue = require('../models').Langue;
const createError = require('http-errors');

module.exports = {
    /**
     * Cette méthode permet de récupérer toutes les langues deja enregistrer
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async getAllLangages(req,res){

        try {
            const langueCollection = await Langue.findAll({});
            res.status(201).send(langueCollection);
        }catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },

    /**
     * Cette methode permet de creer une nouvelle langue
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async createLangage(req,res){

        console.log(req.body)
        try {
            const langue = await Langue.create(
                {
                    designation:req.body.designation,
                    niveau_c : req.body.niveau_c,
                    niveau_e : req.body.niveau_e,
                    niveau_p : req.body.niveau_p,
                }
            );

            res.status(201).send(langue);
        }catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    /**
     * Permet d'afficher une langue a partir de son id
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async getLangageById(req,res){
        try {
            const langage = await Langue.findOne({
                where:{id:req.params.id}
            });

            if (!langage){
                throw createError(404,'Langage does not exist.');
            }else{
                res.status(200).send(langage);
            }
        }catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },

    /**
     * Permet de mettre a jour une langue
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async updateLanguage(req,res){
        try {
            const id = req.params.id;
            const result = await Langue.update(id,req.body,{new:true});

            if (!result){
                throw createError(404,'Langage does not exist.');
            }

            res.status(201).send(result);
        }catch (e) {

            console.log(e.message);
            throw createError(400,'Invalid langage Id.');
        }
    },

    /**
     * Permet de supprimer une langue
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async deleteLangage(req,res){
        try {
            const id = req.params.id;

            const result = await Langue.destroy({id,where:{id:id},delete: true});

            if (result ==0){
                throw createError(404,'Langage does not exist.')
            }

        }catch (e) {

            console.log(e.message);
        }
    }
}