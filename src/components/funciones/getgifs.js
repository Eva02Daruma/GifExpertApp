
export const getGifs = async (category) => {
    const apiKey = '8bZ2ZqXS9MiG712M8gsvjPa63KxX1Y4P';
    const limit = 9;
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limit}&api_key=${apiKey}`;
    const resp = await fetch(url);
    const {data = []} = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs;
}
