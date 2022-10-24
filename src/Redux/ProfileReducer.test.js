import ProfileReducer, {addPostActionCreator, deletePost} from "./ProfileReducer";

let myState = {
    MyPostsData: [{
        id: 1,
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tincidunt enim, sed ullamcorper lacus. Aliquam lacus libero, sollicitudin vitae fermentum at, pulvinar vel nisi. Ut non lorem lacus. Cras scelerisque faucibus diam id porta. Nullam porta bibendum tincidunt. Nulla eget ipsum at nisi consectetur maximus sit amet vitae risus. Morbi fermentum quis ante id eleifend.',
        countLikes: 5,
        imagePath: 'https://i.pinimg.com/564x/72/56/66/725666541ce4ba45a497decc6ad442be.jpg',
        imageOfPost: 'https://i.pinimg.com/564x/ba/f7/59/baf759e2180e7670ebc119705a99fc1a.jpg'
    }, {
        id: 2,
        message: "Nulla vehicula tortor id lectus consequat consequat. Maecenas mattis at est a placerat. Vestibulum finibus ligula nec ex ullamcorper, a pellentesque quam finibus?",
        countLikes: 12,
        imagePath: 'https://i.pinimg.com/736x/27/1d/e9/271de994e713f2e0e0b7262a6abb8b19.jpg',
        imageOfPost: 'https://i.pinimg.com/564x/79/39/71/793971701429c49984a09e18a6b796e6.jpg'
    }, {
        id: 3,
        message: "Ut egestas ex eget nibh auctor, id tincidunt odio suscipit. Nullam euismod pretium libero a ornare. Vivamus ac eros urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
        countLikes: 2,
        imagePath: 'https://i.pinimg.com/564x/f8/f3/96/f8f39673d73f3e0ff80ba4c58c1e7277.jpg',
        imageOfPost: 'https://i.pinimg.com/564x/23/34/1c/23341c674f758267c82db38c6a18314f.jpg'
    },]
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator("ahae");

    let newState = ProfileReducer(myState, action);

    expect(newState.MyPostsData.length).toBe(4);
});

it('after deleting length of messages should be decremented', () => {
    let action = deletePost(3);

    let newState = ProfileReducer(myState, action);

    expect(newState.MyPostsData.length).toBe(2);
});

it("after deleting length shouldn't be decremented if id is incorrect", () => {
    let action = deletePost(10000);

    let newState = ProfileReducer(myState, action);

    expect(newState.MyPostsData.length).toBe(3);
});


