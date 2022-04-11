pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract EmotionalShapes is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("LiveinSoft", "LVS"){}

    function _baseURI() internal pure override returns (string memory){
        return "https://9694-88-161-14-163.ngrok.io/api/erc721/";
    }

    function mint(address to) public returns (uint256)
    {
        require(_tokenIdCounter.current() < 93);
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());

        return _tokenIdCounter.current();
    }
}