/**
 * Created by leniglo on 01/01/16.
 */

Template.footer.events({
    'click #logout': function (e) {
        e.preventDefault();
        Meteor.logout(function () {
            FlashMessages.sendSuccess('Logged Out. Thanks for using My Super Anime List !', {hideDelay: 2000});
        });
    },
    'click #export': function (e) {
        e.preventDefault();
        var json = {
            animes: Show.find({type: 'anime', owner: Meteor.userId()}).fetch(),
            series: Show.find({type: 'serie', owner: Meteor.userId()}).fetch()
        };
        $md_imp_exp.modal('show').find("textarea").val(JSON.stringify(json)).select();
    },
    'click #import': function (e) {
        e.preventDefault();
        $md_imp_exp.modal('show').find("textarea").val("").focus();
    },
    'click #changeBackground': function (e) {
        e.preventDefault();
        $md_chg_back.modal('show').find("input").val("").focus();
    }
});