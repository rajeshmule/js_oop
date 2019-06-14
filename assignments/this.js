// Using function to create object

var user = function(name, id, password,noOfProject){
    var obj = {};
    obj.name = name;
    obj.id = id;
    obj.password = password;
    obj.noOfProject = noOfProject;

    obj.getUsername = function getUsername(){
        return obj.name;
    };
    
    obj.getPassword = function getPassword(){
        return obj.password;
    };

    obj.changeUsername = function changeUsername(){
        return obj.name;
    };

    obj.incrementProject = function incrementProject(){
        return obj.noOfProject = ++(obj.noOfProject);
    };

    obj.decrementProject = function decrementProject(){
        return obj.noOfProject = --(obj.noOfProject);
    };
return obj;

}

