export const TopGenerationCard=async()=> {

    const res = await fetch('https://pixgen-iota-pied.vercel.app/data.json');
    const data = await res.json();

    return data;
}