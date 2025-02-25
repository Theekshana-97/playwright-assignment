import Mailjs from "@cemalgnlts/mailjs";

// Refer https://github.com/cemalgnlts/Mailjs for MailJs documentation 

export class MailHelper {
  private mailjs: Mailjs;

  constructor() {
    this.mailjs = new Mailjs();
  }

  async createAccount(): Promise<{ username: string; password: string }> {
    let account;
    do {
      account = await this.mailjs.createOneAccount();
    } while (!account?.data?.username || !account?.data?.password);

    const { username, password } = account.data;
    return { username, password };
  }

  async waitForMessageId(): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        console.log("Waiting for email to arrive...");
        this.mailjs.on("arrive", (msg: any) => {
          console.log(`Message id: ${msg.id} has arrived (${msg.intro})`);
          resolve(msg.id); // Return the msg.id as soon as the email arrives
        });
      } catch (error) {
        reject(new Error(`Error while waiting for email: ${error.message}`));
      }
    });
  }
}
