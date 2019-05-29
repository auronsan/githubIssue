export const fetchIssuesList = (page = 1, limit = 5) => {
    return fetch(`${process.env.REACT_APP_API_URL}/repos/rails/rails/issues?page=${page}&per_page=${limit}&access_token=&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
        .then((resp) => resp.json())
            .then((resp) => {
            let dataFormatter = {
                data: resp,
                currentPage: page
            }
            return dataFormatter;
    });
};

export const fetchHighLightIssueList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const highlighitem = JSON.parse(localStorage.getItem('highlighitem'));
            resolve(highlighitem);
        }, 10);
    });
}

export const unHighlightIssueItem = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            localStorage.clear('highlighitem');
            addNotification(data, false);
            resolve({});
        }, 10);
    });
}

export const highLightIssueItem = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            localStorage.setItem('highlighitem', JSON.stringify(data));
            const highlighitem = JSON.parse(localStorage.getItem('highlighitem'));
            addNotification(data);
            resolve(highlighitem);
        }, 10);
    });
}

const addNotification = (data, highlight = true) => {
    let notificationList = localStorage.getItem('notification')
    if (notificationList == null) {
        //empty array on JSON.Strify
        notificationList = JSON.stringify([]);
    }
    notificationList = JSON.parse(notificationList);
    const notificationObj = {
        'id': data.id,
        'title': data.title,
        'avatar_user': data.user.avatar_user,
        'user_name': data.user.login,
        'hightlight': highlight
    }
    notificationList.push(notificationObj);
    localStorage.setItem('notification', JSON.stringify(notificationList));

}