const BASE_URL = 'http://localhost/sktec-alumni-api/login';

const requestHeaders = {
    'Content-Type': 'application/json'
};
export const checkSession = async () => {
    const apiEndPoint = `${BASE_URL}/checkSession.php`;
    const requestHeaders = {
        'Content-Type': 'application/json'
    };

    try {
        const response = await fetch(apiEndPoint, {
            method: 'GET',
            headers: requestHeaders,
            credentials: 'include'
        });
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error in checkSession:', error);
        throw error;
    }
};

export const login = async (email, password) => {

    const apiEndPoint = `${BASE_URL}/login.php`;

    const requestPayload = JSON.stringify({ email, password });

    try {
        const response = await fetch(apiEndPoint, {
            method: 'POST',
            headers: requestHeaders,
            body: requestPayload,
            credentials: 'include'
        });

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error in login:', error);
        throw error;
    }
};


export const logout = async () => {
    const apiEndPoint = `${BASE_URL}/logout.php`;
    try {
        const response = await fetch(apiEndPoint, {
            method: 'POST',
            headers: requestHeaders,
            credentials: 'include'
        });

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error in logout:', error);
        throw error;
    }
};