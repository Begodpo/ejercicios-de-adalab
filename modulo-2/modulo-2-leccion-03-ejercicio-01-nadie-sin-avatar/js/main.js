'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';
// 1.
const img = document.querySelector('.user__avatar');
img.src = userAvatar;
// 2.
userAvatar = '';
img.src = userAvatar;
// 3.
userAvatar = 'http://www.fillmurray.com/300/300';
img.src = userAvatar || DEFAULT_AVATAR;

