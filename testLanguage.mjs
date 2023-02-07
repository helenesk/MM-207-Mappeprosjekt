import Dictionary from "./dictionary.mjs";

function testLoadingLanguageResource() {
    const languages = ["./languages/nb.json", "./languages/nn.json", "./languages/en.json"];
    const dictionary = new Dictionary(...languages);
    dictionary.setLanguage("en");
    test(JSON.stringify(dictionary.languagefiles) === JSON.stringify(languages), "Testing setting of languages");
}

function test(test, description){
    if(test){
        console.log(`🟢 ${description}`)
    } else{
        console.log(`🔴 ${description},  ${test}`)
    }
}

testLoadingLanguageResource();