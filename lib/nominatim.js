import nominatim from 'nominatim-client';

const createClient = nominatim.createClient;

export const client = createClient({
    useragent: "W-Eats",             // The name of your application
    referer: 'http://localhost:3000',  // The referer link
});