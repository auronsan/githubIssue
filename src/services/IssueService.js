export const fetchIssuesList = (page = 1, limit = 5) => {
    return fetch(`${process.env.REACT_APP_API_URL}/repos/rails/rails/issues?page=${page}&per_page=${limit}&access_token=&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`).then((resp) => resp.json()).then((resp) => {
        let dataFormatter = {
            data: resp,
            currentPage: page
        }
        return dataFormatter;
    });
};