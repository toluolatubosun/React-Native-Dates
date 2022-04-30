import moment from "moment";

class Moment {
    getDate(data) {
        if (!data) return "";

        moment.locale();
        return moment(data).format("dddd LL");
    }

    getTime(data) {
        if (!data) return "";

        moment.locale();
        return moment(data).format("LTS");
    }
}

export default new Moment();
