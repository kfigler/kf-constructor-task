import { Post } from '../types/types';

export const posts: Post[] = [
  {
    id: '1',
    title: "Noelle's epic post",
    postedBy: 'Noelle Bellefleur',
    postedOn: 'Posted on January 1, 2019 at 12:00 PM',
    imageURL: 'http://placehold.it/900x300',
    lead:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?',
    content:
      "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'",
    comments: [
      {
        userId: 'Gyula',
        text: 'First',
        replies: [
          { userId: 'Bela', text: '+1' },
          { userId: 'Gyula', text: 'Dont say +1' },
          { userId: 'Bela', text: '+1' },
        ],
      },
      {
        userId: 'Gyula2',
        text: 'Second',
        replies: [
          { userId: 'Bela2', text: '+2' },
          { userId: 'Gyula2', text: 'Dont say +2' },
          { userId: 'Bela2', text: '+2' },
        ],
      },
    ],
  },
  {
    id: '2',
    title: "Noelle's epic post2",
    postedBy: 'Noelle Bellefleur',
    postedOn: 'Posted on January 2, 2019 at 12:00 PM',
    imageURL: 'http://placehold.it/900x300',
    lead:
      'Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?',
    content:
      "'Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore? Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'",
    comments: [
      {
        userId: 'Gyula',
        text: 'First',
        replies: [
          { userId: 'Bela', text: '+1' },
          { userId: 'Gyula', text: 'Dont say +1' },
          { userId: 'Bela', text: '+1' },
        ],
      },
      {
        userId: 'Gyula2',
        text: 'Second',
        replies: [
          { userId: 'Bela2', text: '+2' },
          { userId: 'Gyula2', text: 'Dont say +2' },
          { userId: 'Bela2', text: '+2' },
        ],
      },
    ],
  },
];
