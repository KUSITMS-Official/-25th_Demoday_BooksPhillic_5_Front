const API_BASE_URL = 'http://localhost:8080';

export function checkToken() {
    if(!localStorage.getItem('userId')) {
        return false;
    }
    return true;
}

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });

    // 로컬 스토리지에서 ACCESS TOKEN 가져오기
    const accessToken = localStorage.getItem("ACCESS_TOKEN");

    // ACCESS TOKEN을 header에 추가하기
    if (accessToken && accessToken !== null) {
        headers.append("Authorization", "Bearer " + accessToken);
    }

    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    if (request) {
        options.body = JSON.stringify(request);
    }

    return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          // response.ok가 true이면 정상적인 리스폰스를 받은것, 아니면 에러 리스폰스를 받은것.
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      console.log(error);
      console.log(error.status);
      return Promise.reject(error);
    });
}

export async function signin(email, password) {
    try {
        const data = {email, password};
        const res = await call(`/api/auth/login`, "POST", data);
        console.log(res);

        return res;
    }
    catch(err) {
        console.error(err);
    }

}

export async function scrap(storeId) {
    if(!checkToken()) return {code : 0};
    const userId = localStorage.getItem('userId');
    const data = {userId: userId};
    return await call(`/api/user/${storeId}/scrap`, "POST", data);
}

export async function getStoreByDistrict(district) {
    return await call(`/api/pick-up/list?district=${district}&size=200`);
}

export async function homeBookstoreData(storeId) {
    if(!checkToken()) return {code : 0};

    const userId = localStorage.getItem('userId');
    // const data = {storeId : storeId, userId : userId};
    return await call(`/api/bookstore/homeData?storeId=${storeId}&userId=${userId}`, "GET");
}

export async function applyPickUp(data) {
    const userId = localStorage.getItem('userId');
    const body = {
        userId: userId,
        storeId: data.storeId,
        bookGenre: data.tags,
        pickupDate: data.date,
        requirements: data.requirement
    };
    return await call(`/api/pick-up/apply`, "POST", body);
}

export async function userInfo() {
    if(!checkToken()) return {code : 0};
    const userId = localStorage.getItem('userId');
    return await call(`/api/user/profile?userId=${userId}`, "GET");
}

export async function getPhillic() {
    const userId = localStorage.getItem('userId');
    return await call(`/api/user/pickupReviewCount?userId=${userId}`, "GET");
}

export async function getScrap() {
    if(!checkToken()) return {code : 0};
    const userId = localStorage.getItem('userId');
    return await call(`/api/user/scrapList?userId=${userId}`, "GET");
}

export async function deleteProfileImage() {
    const userId = localStorage.getItem('userId');
    return await call(`/api/user/profileImage?userId=${userId}`, "PATCH");
}

export async function searchByTag(name) {
    return await call(`/api/tag?name=${name}`, "GET");
}

export async function postComment(boardId, comment) {
    if(!checkToken()) return {code : 0};
    const userId = localStorage.getItem('userId');
    const data = {userId : userId, comment : comment};
    return await call(`/api/board/${boardId}/comment`, "POST", data);
}

export async function getComment(boardId) {
    return await call(`/api/board/${boardId}/comment`, "GET");
}

export async function getBookstoreListByDistrict(district) {
    if(!checkToken()) return {code : 0};
    const userId = localStorage.getItem('userId');
    console.log("id : ", userId)
    return await call(`/api/bookstore/list?district=${district}&userId=${userId}`, "GET");
}

export async function getBookstoreList() {
    // if(!checkToken()) return {code : 0};
    const userId = localStorage.getItem('userId');
    return await call(`/api/bookstore/list?userId=${userId}`, "GET");


}
export async function getBookstoreProfile(id){
    return await call(`/api/board/${id}`, "GET");
}

export async function getMyPickupList() {
    if(!checkToken()) return {code :0};
    const userId = localStorage.getItem('userId');
    return await call(`/api/pick-up/${userId}`, "GET");
}

export async function getMyReviews() {
    const userId = localStorage.getItem('userId');
    return await call(`/api/user/getReview?userId=${userId}`, "GET");
}

export async function getPickupReviewByStore(storeId) {
    return await call(`/api/pick-up/${storeId}/reviewList`, "GET");
}