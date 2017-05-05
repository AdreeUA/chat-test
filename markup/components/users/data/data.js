var data = {users: {
    defaults: {
        items() {

            let items = [
                {
                    name: 'User 1',
                    avatar: 'avatar-1.png',
                    message: 'Привет, как дела?',
                    self: true,
                    date: '12:00',
                    active: true
                },
                {
                    name: 'User 1',
                    avatar: 'avatar-2.png',
                    message: 'Привет, как дела?',
                    self: true,
                    count: '999',
                    date: '12:00'
                },
                {
                    name: 'User 1',
                    avatar: 'avatar-3.png',
                    message: 'Собеседник печатает...',
                    date: '12:00',
                    isWrite: true
                }
            ];

            for (let i = 0; i < 15; i++) {
                items.push({
                    name: 'User 1',
                    avatar: 'avatar-4.png',
                    message: 'Привет, как дела?',
                    date: '12:00'
                })
            }

            return items;

        }
    }

}}
