
app.controller('DirectoryController', ['$scope', function ($scope) {
    $scope.currentData = {};

    $scope.loadData = function () {
        $scope.DirectoryData = [
            { ID: 1, Name: 'Harry S Truman', Type: 'POTUS',PhoneNo:'867-5309', Email: 'harry@gmail.com', ImageUrl: 'https://s-media-cache-ak0.pinimg.com/236x/9b/a2/57/9ba25796112cad616be27e473ae1e149.jpg' },
            { ID: 2, Name: 'Luke Skywalker', Type: 'Jedi Knight', PhoneNo: '867 - 5555', Email: 'luck@gmail.com', ImageUrl: 'http://static.giantbomb.com/uploads/original/2/28240/1649408-woodywoodpecker1.jpg' },
            { ID: 3, Name: 'Harry Potter', Type: 'Close dweller', PhoneNo: '546 - 8750', Email: 'harry_potter@gmail.com', ImageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-08/18/13/enhanced/webdr13/grid-cell-15170-1439918492-2.jpg' },
            { ID: 4, Name: 'Goerge Potter', Type: 'Physics Consultant', PhoneNo: '512 - 8750', Email: 'goerge@gmail.com', ImageUrl: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg' },
            { ID: 5, Name: 'Daffy Duck', Type: 'Resident Duck', PhoneNo: '546 - 4522', Email: 'daffy@gmail.com', ImageUrl: 'http://allcartooncharacters.com/wp-content/uploads/2015/04/Speedy_Gonzales-310x310.jpg' },
            { ID: 6, Name: 'Goerge Takei', Type: 'Actor extraordinaire', PhoneNo: '222 - 2222', Email: 'george_takei@gmail.com', ImageUrl: 'https://hamzafiaz.files.wordpress.com/2011/06/8.png' },
            { ID: 7, Name: 'Captian America', Type: 'Super Hero', PhoneNo: '423-9520', Email: 'captain_america@gmail.com', ImageUrl: 'http://www.vector-eps.com/wp-content/gallery/classic-cartoon-characters/classic-cartoon-vector12.jpg' },

        ];

        $scope.GetDetails($scope.DirectoryData[0]);
    }


    $scope.GetDetails = function (item) {
        for (var i = 0; i < $scope.DirectoryData.length; i++) {
            $scope.DirectoryData[i].IsCurrent = false;
        }
        item.IsCurrent = true;

        $scope.currentData = item;
    }

    $scope.loadData();

   
}]);

