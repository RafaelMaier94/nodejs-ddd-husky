import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { Client, Pool } from "pg";
import { createUserTable } from "../../src/infra/database/createTables";
import { UserRepositoryDatabase } from "../../src/infra/database/userRepository";
import { CreateUser } from "../../src/application/useCases/CreateUser";

describe("Test use case integration with db", () => {
    jest.setTimeout(60000);
  let postgresContainer: any;
  let postgresClient: Client;

  beforeAll(async () => {
    postgresContainer = await new PostgreSqlContainer().start();
    postgresClient = new Client({ connectionString: postgresContainer.getConnectionUri() });
    await postgresClient.connect();
    await createUserTable(postgresClient);
  });
  afterAll(async () => {
    try {
        await postgresClient.end();
    } catch (error) {
        console.error('Error closing PostgreSQL client:', error);
    }
    try {
        await postgresContainer.stop();
    } catch (error) {
        console.error('Error stopping PostgreSQL container:', error);
    }
  });
  it("should be able to create user", async () => {
    const userRepository = new UserRepositoryDatabase(postgresClient);
    const useCase = new CreateUser(userRepository);

    const payload = {nome: "testName", email: "test@test.com.br"}

    await useCase.execute(payload)
    const output = await postgresClient.query("SELECT * FROM users")
    expect(output.rows[0]).toEqual({id: 1, name: "testName", email: "test@test.com.br"})
  })
});
