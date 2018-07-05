const baseUrl='http://dotnet2.zerone-consulting.com/PythonRESTapi/api/';

export default {
    async fetchEmployees(){
        return fetch(baseUrl + 'employees')
        .then((response) => response.json())
        .then((responseJson) => {
        })
        .catch((error) =>{
        console.error(error);
        });
    }
    
}