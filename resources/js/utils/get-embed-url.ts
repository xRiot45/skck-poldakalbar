export const getEmbedUrl = (url: string, id: string) => {
    if (url.includes('embed')) return url;
    return `https://www.youtube.com/embed/${id}`;
};
