module.exports =  function FactoryServices(pool){

    async function  getPlayerName(){
        let results = await pool.query(`SELECT * from player`);
        
        return results.rows[0]
    }
    async  function getXP(){
        let results = await pool.query(`SELECT xp from player`);
        return results.rows[0]["xp"]
    }
    async function getLevel(){
        let results = await pool.query(`SELECT level from player`);
        return results.rows[0]['level']
    }

    async function getScore(){
       let results =  await pool.query(`SELECT xp from player`);
        
        return results.rows[0]['xp'] *= 2; 
    }

    async function addXp(){
        await pool.query(`update player set  xp = xp + 1`);

    }

    return {

        getPlayerName,
        getXP,
        getLevel,
        getScore,
        addXp
    }
};