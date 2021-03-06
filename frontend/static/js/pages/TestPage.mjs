import View from '../View.mjs'
import Header from '../components/Header.mjs'
import Footer from '../components/Footer.mjs'

export default class TestPage extends View {
    constructor(args) {
        super(args)
        this.setup()
    }

    setup() {
        this.appendMany([Header, Footer])
    }
}
