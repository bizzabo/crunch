

export const getAttendeePhotoAlbum = async (eventId, userId) => {
    const url = `https://8ehxwo1lmi.execute-api.us-east-1.amazonaws.com/alpha/events/${eventId}/attendees/${userId}`;
    const response = await fetch(url);
    return response.json();
};