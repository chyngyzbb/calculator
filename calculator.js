const OPERATIONS={
    plus:'+',
    min:'-',
    umn:'*',
    raz:'/'
}

function calculate({a,b,operation}){
    let result=null

    switch (operation) {
        case OPERATIONS.plus:
            result=plus(a,b);
            break;
        case OPERATIONS.min:
            result=min(a,b);
            break;
        case OPERATIONS.umn:
            result=umn(a,b);
            break;
        case OPERATIONS.raz:
            result=raz(a,b);
            break;
    
        default:
            break;
    }
    return result
}