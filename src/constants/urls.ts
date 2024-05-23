const baseURL =  'https://jsonplaceholder.typicode.com'

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users:{
        base: users,
    },
    posts:{
        base: posts,
        byUserId: (userId: string) => `${users}/${userId}/${posts}`
    },
    comments:{
        base: comments,
        byPostId: (postId: string) => `${posts}/${postId}/${comments}`
    }
}

export {
    baseURL,
    urls
}