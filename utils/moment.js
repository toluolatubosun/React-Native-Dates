import moment from "moment";

class Moment {
    getDate(data) {
        if (!data) return "";

        moment.locale();
        return moment.parseZone(data).format("dddd LL");
    }

    getTime(data) {
        if (!data) return "";

        moment.locale();
        return moment.parseZone(data).format("LTS");
    }
}

export default new Moment();
