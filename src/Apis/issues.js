import { Axios } from './@core'

export const IssuesAPI = {
	getData(owner, repository, params) {
		return Axios.get(`/repos/${owner}/${repository}/issues`, { params })
	},

	getAnIssue(owner, repository, number) {
		return Axios.get(`/repos/${owner}/${repository}/issues/${number}`)
	},
}
