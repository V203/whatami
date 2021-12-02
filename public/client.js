if (typeof window !== 'undefined') {
    if (!sessionStorage["exp"]) {
        console.log("set exp");
        sessionStorage.setItem('exp', 0);
    }
    if (!sessionStorage["score"]) {
        console.log("set score");
        sessionStorage.setItem('score', 0);
    }
    if (!sessionStorage["level"]) {
        console.log("set level");
        sessionStorage.setItem('level', 1);
    }
};