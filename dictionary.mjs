/* 
    Create a module and the supporting structure necessary to support I18n and I10n in future projects. 
    Your module must work in the browser and as a node module. Things to consider that might not be obvious; 
    where and how are actual language resources stored? 
*/

class Dictionary {

    constructor(...languages) {
        this.languagefiles = languages;
        this.dictionary = null;
        this.currentLanguage = null;
    }

    setLanguage = async function (language) {

        let languageFile = this.languagefiles.find(file => {
            return file.indexOf(language) != -1;
        });

        this.currentLanguage = language;

        this.dictionary = await import(languageFile, {
            assert: {
                type: "json"
            }
        });

    }

    get = function(key){
        return this.dictionary[key];
    }

    keys = function(){
        return Object.keys(this.dictionary);
    }

}

export default Dictionary;

