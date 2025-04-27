function searchGift(gifts, giftName, index = 0) {
    if (index === gifts.length) {
        return `${giftName} no está en la lista de regalos.`;
    }
    if (gifts[index] === giftName) {
        return `${giftName} encontrado en la posición ${index}.`;
    }
    return searchGift(gifts, giftName, index + 2);
}

const gifts = ["cámara", "videojuego", "libro", "juguete"];
const giftName = "cámara";

console.log(searchGift(gifts, giftName));
