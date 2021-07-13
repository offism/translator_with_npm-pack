const translate = require('@vitalets/google-translate-api');

class Translator {
	async #translator (word , to){
         let {text} = await translate(word , {to})
         return await text
	}
    
    async #translateFromOneToAnyLang (word ,from ,  to){
         let {text} = await translate(word ,{from , to})
         return await text
	}
     translateTo(word , to){
    	return  this.#translator(word , to)
    }

}

;(async function(){
	let translator = new Translator()
	let res = await translator.translateTo("onajonim , sizni yaxshi ko'raman" , "en")
	let res1 = await translator.translateTo(res , "ru" , 'en')
    console.log(res)
    console.log(res1)
})()