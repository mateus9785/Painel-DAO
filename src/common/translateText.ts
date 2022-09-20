import enJson from "./../translate/en";
import esJson from "./../translate/es";
import ptJson from "./../translate/pt";

function findJsonKey(path : string, jsonFile : any) : string{
    const arrayPath = path.split(".");
    var newJson = jsonFile;
    for (let i = 0; i < arrayPath.length; i++) {
        const key = arrayPath[i];
        newJson = newJson[key];

        if(typeof newJson === 'string') return newJson;
        if(newJson === undefined) return "";
    }
    return "";
}

export default function translateText(jsonPath : string) : string {
    const language = localStorage.getItem('app-language');
    switch (language) {
        case "es":
            return findJsonKey(jsonPath, esJson);
        case "pt":
            return findJsonKey(jsonPath, ptJson);
        default:
            return findJsonKey(jsonPath, enJson);
    }
}