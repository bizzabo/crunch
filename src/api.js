

export const getAttendeePhotoAlbum = async (eventId, userId) => {
    console.log('@@@ eventId, userId', eventId, userId);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
};