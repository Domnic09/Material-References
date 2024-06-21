//construct absolute path of what ever image , taking a relative path which we pass to it
//its taking the base URL of our website
//appending this relative path onto it, then passing it back what ever url it is
//therefore it is easy for us to dynamicaly import images into the diff components
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}