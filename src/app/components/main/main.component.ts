import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/_models/chat.model';
import { GroupMember } from 'src/app/_models/group-member.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  chats: ChatDetails[] = [];

  recentChats: Chat[] = [
    {
      name: 'Leslie Laurens',
      thumbnails: [
        '/assets/images/user.jpeg', '/assets/images/indira.jpeg'
      ],
      lastMessage: {
        content: "What do you think is wrong with him",
        sentAt: "2020-04-8",
        sender: {
          name: 'Troll',
          id: 'troll#5654'
        }
      }
    },
    {
      name: 'Scouters',
      thumbnails: [
        '/assets/images/indira.jpeg'
      ],
      lastMessage: {
        content: "Is everything fine again",
        sentAt: "2020-04-8",
        sender: {
          name: 'Troll',
          id: 'alex#5654'
        }
      }
    },
    {
      name: 'Scouters',
      thumbnails: [
        '/assets/images/indira.jpeg'
      ],
      lastMessage: {
        content: "Ok thanks",
        sentAt: "2020-04-8",
        sender: {
          name: 'You',
          id: 'jane#5654'
        }
      }
    },
    {
      name: 'Leslie Laurens',
      thumbnails: [
        '/assets/images/user.jpeg', '/assets/images/indira.jpeg'
      ],
      lastMessage: {
        content: "What do you think is wrong with him",
        sentAt: "2020-04-8",
        sender: {
          name: 'Troll',
          id: 'troll#5654'
        }
      }
    },
    {
      name: 'Scouters',
      thumbnails: [
        '/assets/images/indira.jpeg'
      ],
      lastMessage: {
        content: "Is everything fine again",
        sentAt: "2020-04-8",
        sender: {
          name: 'Troll',
          id: 'alex#5654'
        }
      }
    },
    {
      name: 'Scouters',
      thumbnails: [
        '/assets/images/indira.jpeg'
      ],
      lastMessage: {
        content: "Ok thanks",
        sentAt: "2020-04-8",
        sender: {
          name: 'You',
          id: 'jane#5654'
        }
      }
    },
    {
      name: 'Leslie Laurens',
      thumbnails: [
        '/assets/images/user.jpeg', '/assets/images/indira.jpeg'
      ],
      lastMessage: {
        content: "What do you think is wrong with him",
        sentAt: "2020-04-8",
        sender: {
          name: 'Troll',
          id: 'troll#5654'
        }
      }
    },
    {
      name: 'Scouters',
      thumbnails: [
        '/assets/images/indira.jpeg'
      ],
      lastMessage: {
        content: "Is everything fine again",
        sentAt: "2020-04-8",
        sender: {
          name: 'Troll',
          id: 'alex#5654'
        }
      }
    },
    {
      name: 'Scouters',
      thumbnails: [
        '/assets/images/indira.jpeg'
      ],
      lastMessage: {
        content: "Ok thanks",
        sentAt: "2020-04-8",
        sender: {
          name: 'You',
          id: 'jane#5654'
        }
      }
    }
  ]

  participants: GroupMember[] = [
    {
      name: 'Leslie Laurens',
      id: 'les.laura#5145',
      avatar: '/assets/images/user.jpeg',
      admin: true,
      online: false
    },
    {
      name: 'Leslie Laurens',
      id: 'les.laura#5145',
      avatar: '/assets/images/user.jpeg',
      admin: false,
      online: true
    },
    {
      name: 'Leslie Laurens',
      id: 'les.laura#5145',
      avatar: '/assets/images/user.jpeg',
      admin: false,
      online: false
    }
  ]

  members: GroupMember[] = [];
  admins: GroupMember[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.admins = this.participants.filter(m => m.admin === true);
    this.members = this.participants.filter(m => m.admin === false);

    this.chats = this.recentChats.map(c => {
      return {
        title: c.name,
        thumbnails: c.thumbnails,
        subt: `${c.lastMessage.sender.name}: ${c.lastMessage.content.slice(0, 10)}`,
        eta: '12m'
      }
    })
  }
}

interface ChatDetails {
  title: string;
  thumbnails: string[];
  subt: string;
  eta: string;
}