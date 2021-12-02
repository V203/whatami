if (typeof window !== 'undefined') {
    if (!sessionStorage["exp"]) {
        sessionStorage.setItem('exp', 0);
    }
    if (!sessionStorage["score"]) {
        sessionStorage.setItem('score', 0);
    }
    if (!sessionStorage["level"]) {
        sessionStorage.setItem('level', 1);
    }
};