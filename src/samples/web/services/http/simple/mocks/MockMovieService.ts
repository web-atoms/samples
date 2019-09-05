import MovieService, { IMovie, IPagedList } from "../MovieService";

export default class MockMovieService extends MovieService {

    public getMovies(
        category: string,
        search: string,
        start: number,
        size: number): Promise<IPagedList<IMovie>> {
        return this.sendResult({
            count: 10,
            value: [
                {
                    name: "Avengers",
                    genre: "Action",
                    description: "Avengers (comics), a team of superheroes in the Marvel Comics universe"
                },
                {
                    name: "Incredibles 2",
                    genre: "Animated",
                    description: "Incredibles 2 is a 2018 American 3D computer-animated superhero film"
                },
                {
                    name: "Guardians of the galaxy",
                    genre: "Sci-Fi",
                    description: "Guardians of the Galaxy is a fictional superhero team"
                },
                {
                    name: "The Dark Knight",
                    genre: "Thriller",
                    description: "Batman: DarKnight, an undeveloped Batman film proposed in 1998"
                },
                {
                    name: "Deadpool",
                    genre: "Comedy",
                    description: "Deadpool (Wade Winston Wilson) is a fictional character" +
                    " appearing in American comic books"
                },
                {
                    name: "The Witch",
                    genre: "Horror",
                    description: "A witch is a practitioner of witchcraft"
                },
                {
                    name: "The Terminator",
                    genre: "Sci-Fi",
                    description: "The Terminator is a 1984 American science-fiction action film"
                },
                {
                    name: "Annabelle",
                    genre: "Horror",
                    description: "Annabelle is a 2014 American supernatural horror film directed by John R. Leonetti"
                },
                {
                    name: "Iron Man",
                    genre: "Action",
                    description: "Iron Man is a fictional superhero appearing in American comic books"
                },
                {
                    name: "Taken",
                    genre: "Thriller",
                    description: "Taken is a 2008 French action thriller film written by Luc Besson"
                }

            ]
        });
    }

}
