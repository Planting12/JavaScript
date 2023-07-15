class Worm {
    constructor() {
        this.wormBody = [new Tile(13, 10), new Tile(13, 11), new Tile(13, 12)];
        // 현재 지렁이의 방향
        this.dir = 'ArrowUp';
        // 다음 지렁이의 방향
        this.dirNext = 'ArrowUp';
    }

    renderWorm() {
        this.wormBody.forEach((item) => {
            item.renderTile();
        });
    }


    moveWorm() {
        // 지렁이의 현재 머리
        const head = this.wormBody[0];
        // 이동에 따른 지렁이의 새로운 머리
        let newHead;

        // 다음 방향으로 지렁이를 이동시킵니다.
        this.dir = this.dirNext;


        // 이동 방향에 따른 머리 랜더링 위치 설정
        if (this.dir === 'ArrowRight') {
            newHead = new Tile(head.col + 1, head.row);
        } else if (this.dir === 'ArrowDown') {
            newHead = new Tile(head.col, head.row + 1);
        } else if (this.dir === 'ArrowLeft') {
            newHead = new Tile(head.col - 1, head.row);
        } else if (this.dir === 'ArrowUp') {
            newHead = new Tile(head.col, head.row - 1);
        }

        this.wormBody.unshift(newHead);
        this.wormBody.pop();
    }

    // 사용자가 입력한 방향키를 체크해서 지렁이의 다음 이동 방향을 결정합니다.
    checkDirection(dirKey) {
        if (this.dir === 'ArrowRight' && dirKey === "ArrowLeft") {
            return;
        } else if (this.dir === 'ArrowDown' && dirKey === "ArrowUp") {
            return;
        } else if (this.dir === 'ArrowLeft' && dirKey === "ArrowRight") {
            return;
        } else if (this.dir === 'ArrowUp' && dirKey === "ArrowDown") {
            return;
        }
        this.dirNext = dirKey;
    }
}
